import useBattery from "./hooks/useBattery";

import "./App.scss";
import convertSeconds from "./helpers/convertSeconds";

function App() {
	const {
		charging,
		chargingTime,
		dischargingTime,
		level,
		
		setOnChargingChange,
        setOnDischargingChange,
        setOnChargingTimeChange,
        setOnLevelChange,
	} = useBattery();

    return (
        <div className="wrapper">
            <h3>Battery Info Board</h3>
			
			<p>Charging State: {charging.toString()}</p>
			<p>Charging Time: {convertSeconds(chargingTime)}</p>
			<p>Discharging Time: {convertSeconds(dischargingTime)}</p>
			<p>Level: {level}%</p>
			
        </div>
    );
}

export default App;
