import { Picker } from '@react-native-picker/picker'

const Select = () => {
    return (
        <Picker >
            <Picker.Item label="Selecione uma Prioridade" value='' />
            <Picker.Item label="Alta" value='alta' />
            <Picker.Item label="Média" value='media' />
            <Picker.Item label="Baixa" value='baixa' />
        </Picker>
    )
}

export default Select