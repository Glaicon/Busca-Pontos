import React from 'react'
import { Tooltip, Icon, Input, } from 'antd'

var tooltipColor = 'rgb(201, 195, 195)'

//import 'antd/dist/antd.less'

const FormInput = ({ input, label, tooltip, col, required, maxLength, disabled, meta: { touched, error, warning }}) => (
    <div className={`col-md-${col}`}>
        <div className="form-group">
            <label className="control-label">
                {label}
                <span style={{ color: 'transparent' }}>.</span>
                { required &&
                    <span className="text-danger"> * </span>
                }
                {
                    tooltip &&
                    <Tooltip title={tooltip}>
                        <Icon type="question-circle-o" style={{ color: tooltipColor }} />
                    </Tooltip>
                }
            </label>
            <Input {...input} maxLength={maxLength} disabled={disabled} style={{ width: '100%' }} />
            <small className="help-block">
                {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))} <span style={{ color: 'transparent' }}>.</span>
            </small>
        </div>
    </div>
)

export {
    FormInput
}