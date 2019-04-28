import React, {Component} from 'react';
import Comic from './Components/Comic/Comic';
import axios from 'axios';
import './ComicList.css';
const baseUrl = 'https://xkcd.now.sh'

class ComicList extends Component{
    constructor(props){
        super(props)
        this.state = {
            comics:[]
        }
    }

    componentDidMount(){
        const allComics =[];
        for(let i = 2001; i<= 2050; i++){
            allComics.push(axios.post(`${baseUrl}/${i}`))
        }
        Promise.all(allComics)
            .then((res)=>{
                this.setState({
                    comics:res.map((e)=>{
                        return e.data
                    })
                })
            })
        console.log(allComics)
    }

    isFunny = (num) => {
        this.setState({
            comics:this.state.comics.map()
        })
    }

    isNotFunny = (num) => {
        this.setState({
            comics:this.state.comics.map(e=> e.num !== num)
        })
    }

    render(){
        const newComics = this.state.comics.map((e, num)=>{
            return <Comic key={num} index={e.num} isFunny={this.isFunny} isNotFunny={this.isNotFunny} comic={e}/>
        })
        return (
          <div className="ComicList">
              {newComics}
          </div>
          );
        }
}

export default ComicList;