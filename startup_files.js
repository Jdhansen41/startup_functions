module.exports = {
    /*Format date of server update to standard format*/
    userDateFormat: function(d){
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        return month+ "-"+day+"-"+year;
    },
    /*Check if domain has a verified certificate, enforces HTTPS*/
    enforceHttps: function(req, res, next) {
        if (!req.secure && req.get("x-forwarded-proto") !== "https" &&
        process.env.NODE_ENV === "production") {
            res.redirect(301, `https://${req.get("host")}${req.url}`);
        } 
        else {
            next();
        }
    },
    /*Check if current cookie for client exists, if not then add cookie to visitors list*/
    checkVisitor: function(visitors,userCookie){
        if(visitors.includes(userCookie) == false){
           visitors.push(userCookie);
        }
        return visitors.length;
    }
}