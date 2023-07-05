const ExpenseList = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>4</td>
            <td>Cat 1</td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
