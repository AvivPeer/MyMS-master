import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';
import { Link } from 'react-router-dom';

import Banner from '../navigation/banner/Banner';

class About extends React.Component {

    componentDidMount() {
        Utility.setTitle("About");
    }

    getSubtitle() {
        return "?מי אני";
    }

    render() {
        return (
            <div>
                <Banner title="על עצמי" subtitle={this.getSubtitle()} />
                <main className="about">
                    <section className="about-box" align="right"><center><a href="https://discord.gg/DufR4Me" target="_blank"><img src="images/DISCORD_IMG.png"/></a></center><h3><br/><br/>
                    אביב פאר<br/>
<br/></h3></section>

                </main>
            </div>
        );
    }
}

export default About;