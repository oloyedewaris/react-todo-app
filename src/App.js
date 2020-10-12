import React from "react";
import style from "./App.module.css";
import ListItems from "./ListItems";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = () => {
    const newItem = this.state.currentItem;
    let newArray = [];
    // let isEmpty = false;
    newArray = [...newItem.text];
    let isEmpty = newArray.every((letter) => letter === " ");
    console.log(isEmpty);
    if (newItem.text !== "" && !isEmpty) {
      const addedItem = [...this.state.items, newItem];
      this.setState({
        items: addedItem,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteHandler = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItems });
  };

  changeInput = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return this.setState({ items: items });
    });
  };

  onPress = (e) => {
    if (e.key === "Enter") {
      this.addItem();
    }
  };

  render() {
    return (
      <div className={style.body}>
        <div className={style.head}>
          <h3>Waris Todo App</h3>
        </div>
        <div>
          <div className={style.main}>
            <header className={style.header}>
              <input
                className={style.input}
                value={this.state.currentItem.text}
                onChange={this.handleInput}
                type="text"
                placeholder="Enter activity"
              />
              <button className={style.button} onClick={this.addItem}>
                ADD
              </button>
            </header>
            <ListItems
              onPress={this.onPress}
              changeInput={this.changeInput}
              deleteHandler={this.deleteHandler}
              items={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
