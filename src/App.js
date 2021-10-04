import React from 'react';
import {Typography, AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import VideoPlayer from "./components/VideoPlayer";
import Option from "./components/Option";
import Notification from "./components/Notification";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid #13e836',
        background: '#a113e8',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}))


const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>

        <VideoPlayer />
        <Option>
            <Notification />
        </Option>
        </div>
    );
};

export default App;