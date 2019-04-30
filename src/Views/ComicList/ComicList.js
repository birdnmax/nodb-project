import React, {Component} from 'react';
import Comic from './Components/Comic/Comic';
import axios from 'axios';
import './ComicList.css';
const baseUrl = 'https://xkcd.now.sh'

class ComicList extends Component{
    constructor(props){
        super(props)
        this.state = {
            comics:[],
            funnyComics: [],
            notFunnyComics:[]
        }
    }

    componentDidMount(){
        const allComics =[];
        for(let i = 2001; i<= 2050; i++){
            allComics.push(axios.post(`${baseUrl}/${i}`))
        }
        Promise.all(allComics)
            .then(res=>{
                let comics = res.map(e=>{
                    return e.data
                })
                axios.post('http://localhost:8060/api/loadComics', comics).then(res =>{
                    this.setState({
                        comics: res.data
                    })
                })
            })
    }

    isFunny = (num) => {
        
        axios.put('http://localhost:8060/api/updateComics', {data:num}).then(res =>{
          this.setState({
              comics: res.data.comics, 
              funnyComics: res.data.funnyComics
          }) 
        })
    }

    isNotFunny = (num) => {
        this.setState({
            comics:this.state.comics.map()
        })
    }
    
    render(){
        const newComics = this.state.comics.map((e, num)=>{
            return <Comic key={num} index={e.num} isFunny={this.isFunny} isNotFunny={this.isNotFunny} comic={e}/>
        })
        const newFunnyComics = this.state.funnyComics.map((e, num)=>{
            return <Comic key={num} index={e.num} isFunny={this.isFunny} isNotFunny={this.isNotFunny} comic={e}/>
        })
        const newNotFunnyComics = this.state.notFunnyComics.map((e, num)=>{
            return <Comic key={num} index={e.num} isFunny={this.isFunny} isNotFunny={this.isNotFunny} comic={e}/>
        })
        return (
          <div className="ComicList">
              {newComics}
              {newFunnyComics}
              {newNotFunnyComics}
          </div>
          );
        }
}

export default ComicList;