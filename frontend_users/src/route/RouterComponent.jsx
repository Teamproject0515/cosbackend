import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import UserListComponent from "../user/UserListComponent";

const AppRouter=() => {
    return(
        <div style={style}>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserListComponent} />
                <Route path="/users" component={UserListComponent} />
                <Route path="/add-user" component={AddUserComponent} />
                <Route path="/edit-user" component={EditUserComponent} />
            </Switch> 
            </BrowserRouter>
        </div>
    );
}

const style= {
    color: 'black',
    margin: '10px'
}

export default AppRouter;