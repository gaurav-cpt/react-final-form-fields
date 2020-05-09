import React from 'react';
import { render } from 'react-dom'
import './App.css';
import {UrlSelectbox} from './UrlSelectbox'
import { Form, Field } from 'react-final-form'

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      request_type: "POST", count_per_page: "", 
      current_issue: "Y"
    }
  }

  onSubmit = async values => {
    console.log(values)
  }

  render(){
    let submit
    const marginClass = {margin:"10px"}
    const radioBtn = {width:"25px", height:"21px"}
    const radioLabel = {position: "relative",  left: "10px", top: "-4px"}
    return (
      <div>
        <Form
            onSubmit={this.onSubmit}
            initialValues={{ request_type:this.state.request_type, count_per_page: this.state.count_per_page, 
                current_issue: (this.state.current_issue == "Y"?["1"]:[])
            }}
            render={({ handleSubmit, form: {
              mutators: { push, pop }
            }, submitting, pristine, values }) => {
              submit = handleSubmit
          return(
            <form onSubmit={handleSubmit}>
              <div style={marginClass}>
                      <Field name="request_type" type="radio" value="GET" >
                          {({ input }) => {
                          return (
                              <>
                              <input
                                  name={input.name}
                                  type="radio"
                                  value="GET"
                                  checked={input.checked}
                                  onChange={ (event) => {
                                    input.onChange(event.target.value); 
                                }}
                                  style={radioBtn}
                              />
                              </>
                          );
                          }}
                      </Field>
                      <label >GET</label>
                  </div>
                  <div style={marginClass}>
                      <Field name="request_type" type="radio" value="POST" >
                          {({ input }) => {
                          return (
                              <>
                              <input
                                  name={input.name}
                                  type="radio"
                                  value="POST"
                                  checked={input.checked}
                                  onChange={ (event) => {
                                    input.onChange(event.target.value); 
                                }}
                                  style={radioBtn}
                              />
                              </>
                          );
                          }}
                      </Field>
                      <label htmlFor="request_type_post" >POST</label>
                  </div>
                  <div style={marginClass}>
                      <Field name="current_issue" id="current_issue_id" style={{marginLeft:"0px"}}  component="input"  type="checkbox" value="1"  />
                      <label  style={{marginLeft:"15px", fontWeight:"bold", color:"#716e6e"}} >Current Issues</label>
                  </div>
                  <div style={marginClass}>
                  <Field name="country" options={
                        [
                            {"value":"11", "display":"India"},
                            {"value":"12", "display":"USA"}
                        ]
                        
                        }  class="form-control">
                    { ({input,  meta, options}) => {
                        return (
                            <UrlSelectbox
                                options={options}
                                name={input.name}
                                className="form-control col-lg-12"
                                value={this.state.country}
                                onChange={ (event) => {
                                  input.onChange(event.target.value); 
                                }}
                            />
                        )
                    }}
                    </Field>
                  </div>
                  <div style={marginClass} >
                    <Field name="count_per_page"  >
                      {({ input, meta }) => (
                          <div>
                              <input {...input}  type="text" className={"form-control col-lg-12 " + (meta.error && meta.touched ? 'is-invalid' : '')} />   
                          </div>
                      )}   
                      </Field>
                  </div>
                  <div >
                      <button type="submit" class="btn-lg btn-success">Submit</button>
                  </div>
            </form>
            )
        }}
        />
      </div>
    );
  }
}

export default App;
