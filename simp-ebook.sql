create table books
	(
        id varchar(20),
        name varchar(20),
        author varchar(20),
        storage numeric(8,0),
        price numeric(4,0) check(price > 0),
        tag varchar(50),
	 primary key (id)
	);
create table users
	(  id varchar(20),
        mail varchar(20),
        forbid Boolean,
        password varchar(20),
        admin Boolean,
	 primary key (id)
	);
create table orders
	(
          id varchar(20),
          uid varchar(20),
          bid varchar(20),
          num numeric(8,0),
          time numeric(16,0),
          paid Boolean,
          completed Boolean,
          PRIMARY key (id ),
          foreign key(uid) REFERENCES users(id),
          FOREIGN key(bid) REFERENCES books(id)
	);
create table cartitems
	(
          uid varchar(20),
          id varchar(20),
          num numeric(8,0),
          PRIMARY key (uid,id),
          foreign key(uid) REFERENCES users(id),
          FOREIGN key(id) REFERENCES books(id)
	);

insert into books values(
    'ISBN7-301-04815-7',
        'Algs',
        'Robert',
        5,
        10,
      'assets/Algs.jpg','');
insert into books values(
    'ISBN7-301-04815-8',
        'Fluent',
        'Ramalho',
        5,
        10,
      'assets/Fluent.jpg','');
insert into books values(
    'ISBN7-301-04815-9',
        'Concrete',
        'Knuth',
        5,
        10,
      'assets/Concrete.jpg','') ;
insert into books values(
    'ISBN7-301-04815-10',
        'TAOCP',
        'Knuth',
        5,
        10,
      'assets/TAOCP.jpg','');
insert into books values(
    'ISBN7-301-04815-223',
        'Datastructure',
        'Robert',
        5,
        10,
      'assets/Algs.jpg','');
insert into books values(
    'ISBN7-301-04815-82',
        'Noob',
        'Ramalho',
        5,
        10,
      'assets/Fluent.jpg','');
insert into books values(
    'ISBN7-301-04815-92',
        'Abstract',
        'Thunk',
        555,
        100,
      'assets/Concrete.jpg','');
insert into books values(
    'ISBN7-301-04815-102',
        'CPTAO',
        'THUNK',
        5,
        10,
      'assets/TAOCP.jpg','');
insert into users values('4396','clearlove@qq.com',False,'7777777',False);
insert into orders values(
          '1',
          '4396',
          'ISBN7-301-04815-7',
          1,
          1542274800000,
          true,
          false);
insert into users values('114514','fubuki@qq.com',False,'7777777',False);
insert into users values('443','joker@qq.com',False,'7777777',False);
insert into users values('1919810','yim@qq.com',False,'7777777',False);
insert into users values('7777777','clearlove7@qq.com',False,'7777777',False);
insert into users values('10086','mobile@qq.com',False,'7777777',False);
insert into users values('1551','ywwuyi@qq.com',False,'7777777',False);
insert into users values('59','tank@qq.com',True,'7777777',False);
insert into orders values(
          '2',
          '4396',
          'ISBN7-301-04815-8',
          1,
          154227490000,
          true,
          false);
insert into orders values(
          '3',
          '7777777',
          'ISBN7-301-04815-11',
          2,
          1542274100000,
          true,
          false);
insert into orders values(
          '4',
          '4396',
          'ISBN7-301-04815-8',
          3,
          1542274200000,
          true,
          false);
insert into orders values(
          '5',
          '7777777',
          'ISBN7-301-04815-10',
          1,
          1542274300000,
          true,
          false);
insert into orders values(
          '6',
          '4396',
          'ISBN7-301-04815-8',
          1,
          1542274000000,
          true,
          false);
insert into cartitems values(
  '4396',
  'ISBN7-301-04815-8',
  5
);
insert into cartitems values(
  '4396',
  'ISBN7-301-04815-10',
  2
);
insert into cartitems values(
  '4396',
  'ISBN7-301-04815-7',
  5
);