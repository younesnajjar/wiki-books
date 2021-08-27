import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {


  books = [
    {
      "id": 1,
      "title": "My Sassy Girl (Yeopgijeogin geunyeo)",
      "authorId": 3,
      "description": "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
      "rating": 2,
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465224141l/30361144._SX318_.jpg"
    },
    {
      "id": 2,
      "title": "Last Blitzkrieg, The",
      "authorId": 5,
      "description": "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
      "rating": 5,
      "cover": "https://img.wattpad.com/cover/275152614-352-k747856.jpg"
    },
    {
      "id": 3,
      "title": "The Law of the Weakest",
      "authorId": 1,
      "description": "convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",
      "rating": 4,
      "cover": "https://m.media-amazon.com/images/I/41f5AEpxyYL.jpg"
    },
    {
      "id": 4,
      "title": "Vampire Academy",
      "authorId": 10,
      "description": "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
      "rating": 2,
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465224141l/30361144._SX318_.jpg"
    },
    {
      "id": 5,
      "title": "Inconvenient Tax, An",
      "authorId": 1,
      "description": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
      "rating": 5,
      "cover": "https://m.media-amazon.com/images/I/41f5AEpxyYL.jpg"
    },
    {
      "id": 1,
      "title": "My Sassy Girl (Yeopgijeogin geunyeo)",
      "authorId": 3,
      "description": "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
      "rating": 2,
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465224141l/30361144._SX318_.jpg"
    },
    {
      "id": 2,
      "title": "Last Blitzkrieg, The",
      "authorId": 5,
      "description": "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
      "rating": 5,
      "cover": "https://img.wattpad.com/cover/275152614-352-k747856.jpg"
    },
    {
      "id": 3,
      "title": "The Law of the Weakest",
      "authorId": 1,
      "description": "convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",
      "rating": 4,
      "cover": "https://m.media-amazon.com/images/I/41f5AEpxyYL.jpg"
    },
    {
      "id": 4,
      "title": "Vampire Academy",
      "authorId": 10,
      "description": "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
      "rating": 2,
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465224141l/30361144._SX318_.jpg"
    },
    {
      "id": 5,
      "title": "Inconvenient Tax, An",
      "authorId": 1,
      "description": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
      "rating": 5,
      "cover": "https://m.media-amazon.com/images/I/41f5AEpxyYL.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
