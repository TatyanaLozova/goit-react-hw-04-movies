#-=============EMMET=============-
для емета html тегів в реакті
ctrl+shift+p settings.json - extension - Emmet
Add this following lines to the settings.json file that opened up.
{
"emmet.includeLanguages": {
"javascript": "javascriptreact"
}
}

правильний екстеншен в термінал закидуємо
ext install dsznajder.es7-react-js-snippets

ren - render() { return() }
sst - this.setState( { } )
est - this.state = { }
impt - import PropTypes from 'prop-types'
imrcp - im {Component}
imr - im React
сdu - comp.DidUpdate
cp - const { } = this.props
cs - const { } = this.state
exp - export default \_
props- this.props.propName
state - this.state.stateName
rcc - create class exp up
rce - create class exp down
rafce - create arrow function
rxactions - redux actions
rxConst - redux const
rxReducer - redux const
rmap - mapState i mapDispatch

#----------------------------Просто інсталяхи------------------------------------

npx create-react-app .

npm install gh-pages --save-dev
"deploy": "gh-pages -d build",
"clean": "gh-pages-clean"
after private -
"homepage": "https://nickname.github.io/...",
||
"predeploy": "npm run build",
"deploy": "netlify deploy -p"
"homepage": "https://homework.netlify.app/",

npm install --save prop-types
npm install --save-dev prettier husky lint-staged
npm i uuid
npm install axios
npm install --save react-spinners
npm i netlify-cli -g нетліфай
npm i redux
npm install react-router-dom
