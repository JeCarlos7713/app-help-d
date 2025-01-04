import {
    useState,
    useCallback,
    useRef,
    useEffect
} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    FlatList,
    Modal,
    Platform
} from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'

type OptionItem = {
    value: string
    label: string
}

interface SelectProps {
    data: OptionItem[]
    onChange: (item: OptionItem) => void
    placeholder: string
    topSelect : number
}

const Select = ({ data, onChange, placeholder , topSelect }: SelectProps) => {

    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded])

    const [value, setValue] = useState("")

    const buttonRef = useRef<View>(null)

    const [top, setTop] = useState(100)

    useEffect(() => setTop(topSelect), [])

    const onSelect = useCallback((item: OptionItem) => {
        onChange(item)

        setValue(item.label)
        setExpanded(false)
    }, [])

    return (
        <View
            ref={buttonRef}
        >
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={toggleExpanded}
            >
                <Text style={styles.text} >{value || placeholder}</Text>
                <AntDesign name={expanded ? "caretup" : "caretdown"} />
            </TouchableOpacity>

            {
                expanded ? (
                    <Modal visible={expanded} transparent >
                        <TouchableWithoutFeedback onPress={() => setExpanded(false)} >
                            <View style={styles.backdrop}>
                                <View style={[
                                    styles.options,
                                    {
                                        marginTop: top
                                    }
                                ]}>
                                    <FlatList
                                        keyExtractor={item => item.value}
                                        data={data}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={styles.optionItem}
                                                onPress={() => onSelect(item)}
                                            >
                                                <Text>{item.label}</Text>
                                            </TouchableOpacity>
                                        )}

                                        ItemSeparatorComponent={() => (
                                            <View style={styles.separator} />
                                        )}
                                    >

                                    </FlatList>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </Modal>
                ) : null
            }
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    backdrop: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    optionItem: {
        height: 40,
        justifyContent: "center",
    },
    separator: {
        height: 4,
    },
    options: {
        backgroundColor: "white",
        width: "100%",
        padding: 10,
        borderRadius: 6,
        maxHeight: 250
    },
    text: {
        fontSize: 15,
        opacity: 0.8,
    },
    button: {
        height: 50,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 8,
    },
});