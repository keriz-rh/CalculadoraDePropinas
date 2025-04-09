
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPorcentageFormProps = {
    setTip: (tip: number) => void;
    tip: number;
}


function TipPorcentageForm({ setTip, tip }: TipPorcentageFormProps) {
    return (
        <div>
            <h3 className="text-2xl font-bold">Propina</h3>
            <p className="text-gray-600">Seleccione el porcentaje de propina</p>
            {tipOptions.map(option => (
                <div key={option.id}>
                    <label>
                        <input 
                        id={option.id}  
                        type="radio" 
                        name="tip" 
                        value={option.value} 
                        onChange={() => setTip(option.value)} 
                        checked={tip === option.value}
                        />
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default TipPorcentageForm;