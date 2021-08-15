import React from 'react';


function Test() {
const isFetching: boolean = true;
  const isLoading: booleab = false;

  const int: number = 42;
  const numArr: number[] = [1,2,3,4,5]
  const numArr2: Array<number> = [1,2,3,4,5]

  //tuple
const contact: [string, number] = ['aladin', 122344];

//any
const lastName: any = 'Fil';

//===
function sayMyName(name: string):void {
  console.log(name,'jhjhj')
} 

//never
function throwError(message: string): never {
  throw new Error(message);
}
//Type

type Login = string

const login: Login = 'admin'
// const login2: Login = 2 not use

type ID = string | numberconst;
const id1: ID = 1234;
const id2: ID = '1234';
console.log(id1, id2)

sayMyName({name: 'petro'});


type SomeType = string | null | undefined

  // int = 'let';
    return (<>
    {int}
    {numArr}
    {numArr2}
      </>
    );
}


export default Test;

