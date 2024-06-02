import React from 'react'
import Sidebar from '../Component/Sidebar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function About() {
    return (
        <>
            <Header title="About Page" />
            <div className="container mt-5">
                <div className="row">
                    <Sidebar title="About Page" />
                    <div className="col-sm-8">
                        <h2>About Page</h2>
                        <h2>Justify content</h2>
                        <div>
                            <p>Use the .justify-content-* classes to change the alignment of flex items. Choose from start (default), end, center, between or around:</p>
                            <div className="d-flex justify-content-start bg-secondary mb-3">
                                <div className="p-2 bg-info">Flex item 1</div>
                                <div className="p-2 bg-warning">Flex item 2</div>
                                <div className="p-2 bg-primary">Flex item 3</div>
                            </div>
                            <div className="d-flex justify-content-end bg-secondary mb-3">
                                <div className="p-2 bg-info">Flex item 1</div>
                                <div className="p-2 bg-warning">Flex item 2</div>
                                <div className="p-2 bg-primary">Flex item 3</div>
                            </div>
                            <div className="d-flex justify-content-center bg-secondary mb-3">
                                <div className="p-2 bg-info">Flex item 1</div>
                                <div className="p-2 bg-warning">Flex item 2</div>
                                <div className="p-2 bg-primary">Flex item 3</div>
                            </div>
                            <div className="d-flex justify-content-between bg-secondary mb-3">
                                <div className="p-2 bg-info">Flex item 1</div>
                                <div className="p-2 bg-warning">Flex item 2</div>
                                <div className="p-2 bg-primary">Flex item 3</div>
                            </div>
                            <div className="d-flex justify-content-around bg-secondary mb-3">
                                <div className="p-2 bg-info">Flex item 1</div>
                                <div className="p-2 bg-warning">Flex item 2</div>
                                <div className="p-2 bg-primary">Flex item 3</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About