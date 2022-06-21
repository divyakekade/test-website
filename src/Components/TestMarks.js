import "./TestMark.css";

export default function TestMarks(){
    return(
        <div className="question">
                        <div className="marks">
                            <div >
                                <label>
                                    <div>
                                        Question No.
                                    </div>
                                    <div>
                                        <input type="text" ></input>
                                    </div>
                                </label>
                            </div>
                            <div >
                                <label>
                                    <div>
                                        Marks obtained
                                    </div>
                                    <div>
                                        <input type="text" placeholder="enter marks"></input>
                                    </div>
                                </label>
                            </div>
                            <div >
                                <label>
                                    <div>
                                        Out off
                                    </div>
                                    <div>
                                        <input type="text" ></input>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="second-sec">
                            Files uploaded by students
                            <div className="marks">
                                <button>File1</button>
                                <button>File2</button>
                                <button>File3</button>
                                <button>File4</button>
                            </div>
                        </div>
                    </div>
    )
}
