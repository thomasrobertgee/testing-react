import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
// 1. Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
const $ = jquery(global.window)

// 2. Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />)

  return $(ReactDOM.findDOMNode(componentInstance)) //produces HTML
}

// 3. Build helper for simulating events

// 4. Set up chai-jquery
