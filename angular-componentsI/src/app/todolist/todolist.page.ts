import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
  todos = [
    {
      id: 1,
      text: 'Testo di prova',
      check: '',
    },
    {
      id: 2,
      text: 'Seconda prova',
      check: 'check',
    },
    {
      id: 3,
      text: 'Terza prova',
      check: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
