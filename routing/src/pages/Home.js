import React from 'react'

const styles = {
    container: {
        position: 'relative',
        textAlign: 'center',
    },
    imageCover: {
        width: '100%'
    },
    blockText: {
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
}

const Home = () => (
    <div style={styles.container}>
        <img 
            style={styles.imageCover}
            src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Belajar Coding"
            alt="belajarcoding"/>
        <div style={styles.blockText}>
            <h1>Belajar Coding Sekarang</h1>
            <h4>
                Lebih dari 2.000 modul belajar pemrograman dalam beragam format yang bisa kamu pelajari.
            </h4>
        </div>
    </div>
)

export default Home