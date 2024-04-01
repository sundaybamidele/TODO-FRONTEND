function Pageloading() {
  return (
    <div className="container mt-3">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden" role="status">
          Loading...Please wait.
        </span>
      </button>
    </div>
  );
}

export default Pageloading;
