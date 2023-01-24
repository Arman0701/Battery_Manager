import useBattery from "./hooks/useBattery";

import "./App.scss";

function App() {
	const {
		charging,
		chargingTime,
		dischargingTime,
		level,
	} = useBattery();

    return (
        <div className="wrapper">
            <h3>Battery Info Board</h3>
			
			<p>Charging State: {charging.toString()}</p>
			<p>Charging Time: {chargingTime}</p>
			<p>Discharging Time: {dischargingTime}</p>
			<p>Level: {level}%</p>
			
        </div>
    );
}

export default App;
