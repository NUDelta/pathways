#Suggestion Form

##Description and High Level Plan
We will be building a web form to collect suggestions from users.

1. Static web form
1. Web form that prints out contents when the submit button is pressed
1. Web form that sends contents to Parse when submit button is pressed
1. Web form that sends contents to Parse when submit button is pressed and the information in the form is valid

##Prerequisites
- [What is HTML?](http://www.w3schools.com/html/html_intro.asp)
- [HTML Editors](http://www.w3schools.com/html/html_editors.asp)
- [What is Javascript?](http://www.w3schools.com/js/js_intro.asp)

##Resources
Here is a list (non-exhaustive) of helpful links:
- [Building Forms](http://learn.shayhowe.com/html-css/building-forms/)
- [onsubmit event](http://www.w3schools.com/jsref/event_onsubmit.asp)
- [What is Parse? (just the beginning)](http://www.devfright.com/parse-com/)
- [Parse Getting Started](https://parse.com/apps/quickstart#parse_data/web/existing)
- [Parse JS API](https://parse.com/docs/js/api/index.html), in particular [objects](https://parse.com/docs/js/api/classes/Parse.Object.html)

##Plan

###1. Static Web Form
Build a static web form using only HTML. Refer to [Building Forms](http://learn.shayhowe.com/html-css/building-forms/).

- [ ] There are fields for name, date, and suggestion.
- [ ] The input elements / text areas have the right type.
- [ ] Each input element / text area has a descriptive label.
- [ ] There is a submit button.

###2. Web form that prints out contents when the submit button is pressed
Add a JavaScript file to the HTML. [link](http://www.w3schools.com/js/js_whereto.asp).  
Attach an event listener to the form such that when the submit button is pressed, the contents of the form are shown to the user in a new window. [Window alert() Method](http://www.w3schools.com/jsref/met_win_alert.asp), [listening for form submit](http://www.w3schools.com/jsref/event_onsubmit.asp) 

- [ ] My JavaScript is in a separate file from my HTML.
- [ ] When I click submit, the contents of my form are shown to me in a alert box.

###3. Web form that sends contents to Parse when submit button is pressed
Create a Parse account and create a new App. [What is Parse? (just the beginning)](http://www.devfright.com/parse-com/).

Adapt the "Getting Started" example to send the contents of your form to your Parse database. [Parse Getting Started](https://parse.com/apps/quickstart#parse_data/web/existing), [Parse JS API](https://parse.com/docs/js/api/index.html), in particular [objects](https://parse.com/docs/js/api/classes/Parse.Object.html)

- [ ] I can see data from submitted forms in the Parse Core.

###4. Web form that sends contents to Parse when submit button is pressed and the information in the form is valid
We can prevent users from submitting incomplete forms using the [`required`](http://www.w3schools.com/tags/att_input_required.asp) HTMl tag.

- [ ] My form does not send data to Parse if the form is not filled out.






