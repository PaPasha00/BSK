import classes from './Kit.module.css';

const Kit = () => {
    return (
        <div className={classes.container}>
            <img src="/ki.png" alt="kit" />
            <div className={classes.const}>
                <p>Discover new depths of knowledge</p>
                <a href="#search" className={classes.button}>Искать книги</a>
            </div>
            
        </div>
    );
}

export default Kit; 