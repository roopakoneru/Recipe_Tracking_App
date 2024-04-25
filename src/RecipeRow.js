import React from "react";

function RecipeRow({ recipe, index, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;

  const handleDelete = () => {
    deleteRecipe(index);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        {photo && (
          <img src={photo} alt="Recipe" style={{ maxWidth: "100px" }} />
        )}
      </td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td>
        <button onClick={handleDelete} name="delete">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeRow;
