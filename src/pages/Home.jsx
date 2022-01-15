import React from "react";
import {Categories,SortPopup,PizzaBlock } from "../components";
function Home({pizass}) {
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            items={["Мясние", "Вегетирианские", "Гриль", "Острие", "Закритие"]}
          ></Categories>
          <SortPopup items={["популярности", "цене", "алфавиту"]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizass.map((obj)=>{
            return <PizzaBlock 
            key={obj.id} 
            {...obj}
            />
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
