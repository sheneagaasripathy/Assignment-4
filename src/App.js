import React, {Component} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import {Paper,Typography,AppBar,Toolbar,Button,IconButton, List}from "@material-ui/core";
import "./App.css";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";

// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import login from "./components/login";
// import Profile from "./components/Profile";
// import {AccountCircle, Update} from "@material-ui/icons";
// import signup from "./components/signup";
// import Addbook from "./components/Addbook";
// import Adminboard from "./components/Adminboard";
// import User from "./components/User";
// import BookList from "./components/BookList";
// import AddUser from "./components/AddUser";
// import List from "./components/List";



const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: '#212121',
    color: '#fafafa'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: '#212121'
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.logOut= this.logOut.bind(this);
    this.state = {
      showAddBook: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    let user;
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };
    }

    if (user) {
      this.setState({
        currentUser: user,
        showAddBook: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut () {
    localStorage.clear()
  }

  render(){
    const{currentUser,showAddBook}=this.state;
    return(
      
      // <Router>
        <div>
          {/* <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
              <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Button href="/" color='inherit'>
                  <Typography><strong>Books Shop</strong></Typography>
                </Button>
                <Button href="/home" color='inherit'>
                  <strong>Home</strong>
                </Button>

                <Button href="/adminboard" color='inherit'>
                    <strong>Adminboard</strong>
                  </Button>

                {showAddBook &&(
                <Button href="/addbook" color='inherit'>
                    <strong>AddBook</strong>
                  </Button>
                )}
                {currentUser &&(
                  <Button href="/user" color='inherit'>
                    <strong>User</strong>
                  </Button>
                )} 
              </Paper>

            {currentUser ? (
              <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button herf="/profile" color="inheri">
                    <AccountCircle/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
            ):  (          

                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/signup" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
            )}
          <Footer/>
          </Toolbar>
          </AppBar>

          <div>
            <Switch>
           
            <Route exact path ={["/","/home"]}component={Home}/>
            <Route exact path="/login" component={login}/>
             <Route exact path="/profile" component={Profile}/>
             <Route exact path="/signup" component={signup}/>
             <Route exact path="/addbook" component={Addbook}/>
             <Route exact path="/update" component={Update}/>
             <Route exact path="/adminboard" component={Adminboard}/>
             <Route exact path="/user" component={User}/>
             <Route exact path="/booklist" component={BookList}/>
             <Route exact path="/adduser" component={AddUser}/>
             {/* <Route exact path="/list" component={List}/> */}
             
            {/* </Switch>
          </div> */}
            

    <NavBar/>
    <BottomBar/>

        </div>
      // </Router>
    )
  }
}

export default App