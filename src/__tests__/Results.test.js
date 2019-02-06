import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Results from "../Results";

describe('Results', () => {
  const handleDeleteClick = id => () => {
    console.log("clicked");
  };
  const pets = [
    {
      name: "fuffi",
      id: 1,
      media: "media",
      location: "Italy",
      breed: "doberman",
      animal: "dog"
    },
    {
      name: "lillo",
      id: 2,
      media: "media",
      location: "Italy",
      breed: "siamese",
      animal: "cat"
    }
  ];
  const filter = "";


it("renders without crashing", () => {
    const div = document.createElement("div");
  
    ReactDOM.render(
      <Results
        filter={filter}
        pets={pets}
        handleDeleteClick={handleDeleteClick}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  
  });
  
  it('matches the saved snapshot', () => {
  
    const component = renderer.create(
      <Results
        filter={filter}
        pets={pets}
        handleDeleteClick={handleDeleteClick}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
  
})
