const getUserInfo= (firstName,lastName,country,title,skills)=>
{
    return `${firstName} ${lastName}, a${title} developer based in ${country}. He knows ${skills.join(" ")}`
}
const skills=['HTML','CSS','REACT']

console.log(getUserInfo('BalaMurugan','Ganesan','India','Reactjs',skills))