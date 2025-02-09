interface ErgebnisProps {
    message?: string
}

export default function Ergebnis({message}: ErgebnisProps) {
    return (
        <div>
            <h2>{message}</h2>
            <div className="flex mb-3">
                <div className="w-1/2">
                    <h2>Annuitätendarlehen</h2>
                </div>
                <div className="w-1/2">
                    <h2>Festgeldkonto</h2>
                    <div className="flex">
                        <div className="w-1/2">Zinsen vor Steuern</div>
                        <div className="w-1/2">EUR</div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">Steuerabzug (26,375%)</div>
                        <div className="w-1/2">EUR</div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">Zinsen nach Steuern</div>
                        <div className="w-1/2">EUR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
