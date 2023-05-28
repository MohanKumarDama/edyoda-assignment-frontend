import React, { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import "./Payment.css"
const icon1 = require("../../assets/Icon1.png")
const icon2 = require("../../assets/Icon2.png")
const Book = require("../../assets/Book.png")
const Group1 = require("../../assets/Group1.png")
const Group4 = require("../../assets/Group4.png")
const Group3 = require("../../assets/Group3.png")
const Group2 = require("../../assets/Group2.png")
const useStyles = makeStyles({
  selectedRadio: {
    color: '#47BA68',
  },
  formControlLabel: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '10px',
    '&$checked': {
      backgroundColor: '#D7EDDD',
    },
  },
  checked: { backgroundColor: '#D7EDDD' }, // Empty object to reference the checked class
  deSelected: {
    color: '#BEBEBE'
  }
});

const SelectableDivs = () => {
  const classes = useStyles();
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivSelect = (event) => {
    setSelectedDiv(event.target.value);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <div className='background-container d-flex justify-content-between p-5'>
        <div className='d-flex'>
          <div className="d-flex flex-column text-white">
            <div>
              <h1>
                Access curated courses worth{' '}
                <br />₹{' '}
                <span style={{ color: 'red', textDecoration: 'line-through' }}>
                  18,500
                </span>{' '}
                at just{' '}
                <span className='spanitems'>₹ 99</span> per year!
              </h1>
            </div>

            <div className='m-5 pt-3'>
              <div class="website-list d-flex p-2">
                <img src={Book} class="icon" />
                <p class="ml-5 text"><span className='spanitems'> 100+ </span>Job Relevant Courses </p>
              </div>
              <div class="website-list d-flex p-2">
                <img src={Group1} class="icon" />
                <p class="ml-5 text"><span className='spanitems'>20,000+</span> Hours of content</p>
              </div>
              <div class="website-list d-flex p-2">
                <img src={Group3} class="icon" />
                <p class="ml-5 text"><span className='spanitems'>Exclusive</span> webinar access</p>
              </div>
              <div class="website-list d-flex p-2">
                <img src={Group4} class="icon" />
                <p class="ml-5 text">Scholarship worth<span className='spanitems'> ₹94,500</span></p>
              </div>
              <div class="website-list d-flex p-2">
                <img src={Group2} class="icon" />
                <p class="ml-5 text"><span className='spanitems'>Ad Free</span> learning experience</p>
              </div>

            </div>
          </div>
        </div>
        <div className='p-5 mt-2 mr-5' style={{ backgroundColor: 'white',width:'549px' }}>
          <div className='selctor'>
            <div>
              <img src={icon1} style={{ width: '38px' }} alt='icon1' />
              <p className='signup'>Sign Up</p>
            </div>
            <div>
              <img src={icon2} style={{ width: '38px' }} alt='icon2' />
              <p className='signup'>
                Subscribe
              </p>
            </div>
          </div>
          <h4 className='heading'>
            Select your subcription plan
          </h4>
          <RadioGroup value={selectedDiv} onChange={handleDivSelect}>
            <FormControlLabel
              value="div0"
              control={<Radio checked={true} checkedIcon={<CheckCircleIcon className={classes.deSelected} />} />}
              label="12 Months Subscription"
              classes={{
                root: classes.formControlLabel,
                checked: classes.deSelected,
              }}
              style={{ backgroundColor: "#E7E7E7" }}
            />

            <FormControlLabel
              value="div1"
              control={
                <Radio
                  color="default"
                  classes={{
                    checked: classes.selectedRadio,
                  }}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon className={classes.selectedRadio} />}
                />
              }
              label="12 Months Subscription"
              classes={{
                root: classes.formControlLabel,
                checked: classes.checked,
              }}
              style={{ backgroundColor: selectedDiv === 'div1' ? '#D7EDDD' : 'white' }}
            />

            <FormControlLabel
              value="div2"
              control={
                <Radio
                  color="default"
                  classes={{
                    checked: classes.selectedRadio,
                  }}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon className={classes.selectedRadio} />}
                />
              }
              label="6 Months Subscription"
              classes={{
                root: classes.formControlLabel,
                checked: classes.checked,
              }}
              style={{ backgroundColor: selectedDiv === 'div2' ? '#D7EDDD' : 'white' }}
            />

            <FormControlLabel
              value="div3"
              control={
                <Radio
                  color="default"
                  classes={{
                    checked: classes.selectedRadio,
                  }}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon className={classes.selectedRadio} />}
                />
              }
              label="3 Months Subscription"
              classes={{
                root: classes.formControlLabel,
                checked: classes.checked,
              }}
              style={{ backgroundColor: selectedDiv === 'div3' ? '#D7EDDD' : 'white' }}
            />
          </RadioGroup>
          <hr color='#BEBEBE' />
          <div className='total'>
            <div>
              <p className='subtotal'>
                Subscription Fee
              </p>
            </div>
            <div>
              <p className='subtotal'>₹18,500</p>
            </div>
          </div>
          <div className='maintotal'>
            <div>
              <p className='time'>Limited time offer</p>
              <div className='clock'>
                <img style={{ width: 24, height: 24 }} src={require("../../assets/clock.png")} />
                <p className='tag'>Offer valid till 25th March 2023 </p>
              </div>
            </div>
            <div className='finaldiv'>
              <p className='final'>- ₹18,401</p>
            </div>
          </div>
          <div className='total'>
            <div>
              <p className='gst'>
                Total <span className='gst2'>(Incl. of 18% GST)</span>
              </p>
            </div>
            <div>
              <p className='gst3'>₹149</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              style={{ backgroundColor: 'white', color: '#F77171' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: 'green', color: 'white', flexDirection: 'row' }}
            >
              Proceed to Pay
            </Button>
          </div>
          <div className='d-flex mr-auto mt-3'>
            <img src={require('../../assets/Razor.png')} className='razor' alt='razor'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectableDivs;
