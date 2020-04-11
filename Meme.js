import React from 'react'

class Meme extends React.Component{
    constructor()
    {
        super();
        this.state={
            toptext:"",
            bottomtext:"",
            randomimg:"http://i.imgflip.com/1bij.jpg",
            allimages:[]
    }
    this.changebottomtext=this.changebottomtext.bind(this);
    this.changetoptext=this.changetoptext.bind(this);
    this.submitHandle=this.submitHandle.bind(this);
    }   
    // in betwwen we have to call the component did mount so that we can make an API call 
    //these are in built methods in react
    componentDidMount()
    {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                
                this.setState({ allimages: memes })
            })
    }

    changebottomtext(event)
    {
        this.setState({bottomtext: event.target.value})
    }
    changetoptext(event)
    {
        this.setState({toptext: event.target.value})
    }
    submitHandle(event)
    {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allimages.length)
        const randMemeImg = this.state.allimages[randNum].url;
        this.setState({ randomimg: randMemeImg })
    }
    render()
    {
        return(
         <div>
                <form onSubmit={this.submitHandle}>
                    <label className="label">
                     TOPTEXT:
                        <input type="text" name="toptext" value={this.state.toptext}
                        onChange={this.changetoptext}                        
                        />
                     </label>
                     <br/>
                                         <label className="label">
                     BOTTOMTEXT:
                        <input type="text"  name="bottomtext"
                            value={this.state.bottomtext}
                            onChange={this.changebottomtext}
                        />
                     </label>
                     <br/>
                    <input type="submit" value="Generate" className='button' />
</form>
  
        <div className='meme'>
            <img src={this.state.randomimg} className="image" />
            <h2 className="top">{this.state.toptext}</h2>
            <h2 className="bottom">{this.state.bottomtext}</h2>
        </div>
         </div>             
        )
    }
}
export default Meme