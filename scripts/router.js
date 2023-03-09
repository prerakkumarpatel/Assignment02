(function (core){
"use strict";
class Router{
    constructor() {
        this.m_activeLink="";
    }
    /**
     * @constructor
     */
    get ActiveLink (){
     return this.m_activeLink;
    }

    /**
     *
     * @param link
     * @constructor
     */
    set ActiveLink(link){
        this.m_activeLink = link;
    }

    Add(route){
    this.m_routingTable.push(route);
    }
    Find(route){
        return this.m_routingTable.indexOf(route);
    }
    Remove(route){
    if(this.Find(route)> -1){
        this.m_routingTable.splice(this.Find(route),1);
        return false;
    }
    }
    AddTable(routingTable){
        this.m_routingTable = routingTable;
    }
    /**
     *
     */
    toString()
    {
        return this.m_routingTable.toString();
    }
}

    core.Router=Router;

})(core||(core={}));
let router = new  core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/contact",
    "/contact-list",
    "/edit",
    "/login",
    "/projects",
    "/register",
    "/services"
]);
let route = location.pathname;
 router.ActiveLink=(router.Find(route)>-1)
     ?(route === "/")?"home":route.substring(1)
     :("404");
 // console.log(router.Ac);
