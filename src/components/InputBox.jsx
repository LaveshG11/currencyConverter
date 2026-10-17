import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`currency-field ${className}`}>
            <div className="amount-column">
                <label htmlFor={amountInputId} className="field-label">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="amount-input"
                    type="number"
                    placeholder="0.00"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="currency-column">
                <label className="field-label" htmlFor={`${amountInputId}-currency`}>Currency</label>
                <select
                    id={`${amountInputId}-currency`}
                    className="currency-select"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;