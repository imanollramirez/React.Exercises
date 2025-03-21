const Modal = () => {
    return (
        <>
<button type="button" class="btn btn-warning mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
Elemento 13
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Elemento 13</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Elemento 13
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Elemento 13</button>
        <button type="button" class="btn btn-primary">Elemento 13</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
};

export default Modal;