import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import ProductComponent from "../user/ProductListComponent2";
import ProductDetailComponent from "../user/ProductInfoComponet";
import Demo from "../user/demo";


const AppRouter = () => {
    return(
        <div style={style}>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={UserListComponent} />
                        <Route path="/users" component={UserListComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/product-list" component={ProductComponent} />
                        <Route path="/product-detail" component={ProductDetailComponent} />
                        <Route path="/demo" component={Demo} />
                    </Switch>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;