import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchRooms } from "../../data/actions"
import constants from "./constant";
import {saveSelection, getDropDowns} from "../services/roomService";

class DynamicForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: constants.roomsSelections,
            adults: [],
            children: []
        }
    }

    componentDidMount() {
        const { rooms, fetchRooms } = this.props
        if (rooms.length === 0) {
            fetchRooms();
        }

        if (rooms) {
            this.setState({rooms: rooms.selections})
        }

        // Get dropdowns values
        getDropDowns().then((res) => {
            console.log('res', res);
            res.data && res.data.adults && this.setState({adults: res.data.adults});
            res.data && res.data.children && this.setState({children: res.data.children})
        })
    }

    handleCheck(evt, selectedRoom) {
        const newRooms = this.state.rooms.map((room, sidx) => {
            if (room.number !== 1 && room.number <= selectedRoom && evt.target.checked) {
                return { ...room, disabled: false, checked: true };
            }
            if (room.number !== 1 && room.number >= selectedRoom && !evt.target.checked) {
                return { ...room, disabled: true, checked: false, children: 0, adult: 1 };
            }
            if (room.number !== 1 && room.number > selectedRoom) {
                return { ...room, disabled: true, checked: false };
            }
            return { ...room };
        });
        this.setState({ rooms: newRooms });
    };

    handleAdults(evt, number) {
        const newRooms = this.state.rooms.map((room, sidx) => {
            if (number === room.number) {
                return { ...room, adult: parseInt(evt.target.value) };
            }
            return { ...room };
        });
        this.setState({ rooms: newRooms });
    };

    handleChild(evt, number) {
        const newRooms = this.state.rooms.map((room) => {
            if (number === room.number) {
                return { ...room, children: parseInt(evt.target.value) };
            }
            return { ...room };
        });
        this.setState({ rooms: newRooms });
    }

    submit() {
        saveSelection(this.state.rooms).then((res)=> {
            this.setState({rooms: res.data.selections});
            alert('Successfully saved!');
        }).catch((err) => {
            this.setState({rooms: constants.roomsSelections});
            alert('something went wrong');
        });
    }

    render() {
        return (
            <div className="App" style={{marginTop: '40px'}}>
              <div className='container'>
                  <a href="/">Home</a>
                  <h2>Select Rooms</h2>
                  <br />
                <div className='row'>
                    {this.state.rooms.map((room, idx) => (

                        <div className='col-sm-3' key={idx}>
                          <div className="card">
                              {room.number === 1 ?
                                  <h5 className="card-header">Room 1</h5> :
                                  <div className="card-header">
                                    <label className="checkbox-inline">
                                      <input type="checkbox" checked={room.checked} onChange={(e) => this.handleCheck(e, room.number)} />
                                      Room {room.number}
                                    </label>
                                  </div>
                              }
                            <div className={room.disabled ? 'card-body disabled' : 'card-body'}>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="sel1">Adults (18+)</label>
                                    <select className="form-control" id="sel1" value={room.adult} onChange={(e) => this.handleAdults(e, room.number)}>
                                        {
                                            this.state.adults.map(item => <option key={item} value={item}>{item}</option>)
                                        }
                                    </select>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="sel1">Children (0-17)</label>
                                    <select value={room.children} className="form-control" id="sel1" onChange={(e) => this.handleChild(e, room.number)}>
                                        {
                                            this.state.children.map(item => <option key={item} value={item}>{item}</option>)
                                        }
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}

                  <div className="submit-btn">
                    <button className="btn btn-lg btn-info" type="submit" onClick={this.submit.bind(this)}>Submit</button>
                  </div>

                </div>
              </div>
            </div>
        );
    }
}

const mapStateToProps = ({ rooms, dropdown_values }) => ({ rooms, dropdown_values })

export const loadData = ({ dispatch }) => dispatch(fetchRooms())

export default {
  loadData,
  component: connect(mapStateToProps, { fetchRooms })(DynamicForm)
}
