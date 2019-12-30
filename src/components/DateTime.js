import React from "react";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function DateTime(props) {

return (
		<MuiPickersUtilsProvider utils={DateFnsUtils} >
		<KeyboardDateTimePicker
		id="ih"
		variant="inline"
		ampm={true}
		label="Start time"
		value={props.value}
		onChange={props.onChangeProp}
		disablePast
		format="yyyy/MM/dd HH:mm"
		/>
		</MuiPickersUtilsProvider>

);
}

export default DateTime;