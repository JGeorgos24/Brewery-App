import React, { Component } from 'react';

class BACCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sex: null,
            weight: 0,
            numberOfBeers: 0,
            hoursSinceStart: 0,
            BAC: 0
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    calculateBAC = (e, input) => {
        e.preventDefault();
        let constant = 0;
        if(input.sex == "male") {
            constant = 0.68;
        } else if (input.sex == "female") {
            constant = 0.55;
        } else {
            alert('Need to input a sex');
            return;
        }
        let actualNumOfBeer = input.numberOfBeers - (input.hoursSinceStart / 2);
        let ounces = (12 * actualNumOfBeer * .05);
        let millilitres = (ounces * 29.6);
        let grams = (millilitres * 0.79);
        let volume = (input.weight * 0.45 * 1000);
        let BAC = (grams / (volume * constant)) * 100;
        BAC = BAC.toFixed(3);
        console.log(BAC);
        this.setState({
            BAC: BAC
        })
    }

    render() {
        return(
            <div className="Game1">
                <h1>Guess Your BAC</h1>
                <form onSubmit={(e) => this.calculateBAC(e, this.state)}>
                    Sex: <select id="sex" name="sex" onChange={this.onChange}>
                        <option value="choose sex">Choose Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    Weight: <input
                        type="text"
                        name = 'weight'
                        placeholder = 'Your Weight in lbs'
                        onChange = {this.onChange}
                    />
                    Number of Beers: <input
                        type="text"
                        name = 'numberOfBeers'
                        placeholder = 'Assumes 12oz and 5% ABV'
                        onChange = {this.onChange}
                    />
                    Hours since First Beer: <input
                        type="text"
                        name = 'hoursSinceStart'
                        placeholder = 'When did you start?'
                        onChange = {this.onChange}
                    />
                    <input type="submit" value="Guestimate My BAC"/>
                </form>
                {this.state.BAC != 0 && <h3>Your very loosely estimated BAC is {this.state.BAC}</h3>}
            </div>
        )
    }
    
}

export default BACCalculator;