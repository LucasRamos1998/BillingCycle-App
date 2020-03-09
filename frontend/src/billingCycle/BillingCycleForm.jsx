import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/LabelAndInput";
import { init } from "./billingCycleActions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={labelAndInput}
                        label="nome"
                        cols="12 4"
                        placeholder="Informe o nome"
                    />
                    <Field
                        name="month"
                        component={labelAndInput}
                        type="number"
                        label="mês"
                        cols="12 4"
                        placeholder="Informe o mês"
                    />
                    <Field
                        name="year"
                        component={labelAndInput}
                        type="number"
                        label="ano"
                        cols="12 4"
                        placeholder="Informe o ano"
                    />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={this.props.init}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}
BillingCycleForm = reduxForm({
    form: "BillingCycleForm",
    destroyOnUnmount: false
})(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);
