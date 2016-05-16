# Angular Shopping Cart App

**Shopping Cart Should Have the Following Specs:**
- Search by name
- Search by category with drop down list
- Table with column for image,  and tea information
- Quantity drop down number list
- Add to bag button
- New items added to bag default to qty of 1, if no qty is selected
- Checkout button
- Checkout/bag starts empty, then updates with number of items
- Tea information section has:
  - Price, Caffeine Scale, Ingredients, Rating
 - In Stock? - shows `Yes` or `No` when True/False respectively
 - Categories - goes through categories list and displays each one
- Checkout page
 - Order total
 - Lists each item that was added from the previous page, and includes its quantity
 - Ability to edit quantity
 - Editing quantity updates the sub-total and order total
 - Ability to remove a product, which then updates the order total
 - Items in checkout show the caffeine scale, ingredients, rating, and sub-total

**The app should look something along the lines of this:**
[![](https://i.gyazo.com/b83c4f06526777f552cb5d817c24e567.png)](https://coursework.galvanize.com/redirects/learning_experiences/10)


**BONUS**:
## Angular Custom Directive: Caffeine Meter

Let's add a custom directive to graphically display the amount of caffeine in each tea.

**The caffeine display should look something like this:**
![](https://i.gyazo.com/666d37af0d208915f33386ee47e80fb5.png)

 The CSS for the caffeine meter can be obtained from here: [Caffeine Meter CSS](http://codepen.io/Sambego/pen/zKLar)

**The code should look something like this:**

```html
<caffeine-meter caffeinemg="tea.caffeineScale" id="tea._id"></caffeine-meter>
```

![](https://i.gyazo.com/8c1d4c68b881d8a0431202e3b7469c8e.png)
