import React from 'react'
import { KeyboardDateTimePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import DateFnsUtils from '@date-io/date-fns'

function DateTime (props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        variant='inline'
        margin='normal'
        id='date-picker-dialog'
        label='Date picker dialog'
        format='yyyy/MM/dd HH:mm'
        value={props.value}
        onChange={props.onChangeProp}
        disablePast
      />
    </MuiPickersUtilsProvider>

  )
}

export default DateTime
