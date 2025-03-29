const NotificationButton = () => {
    return ( 
        <>
        <button type="button" class="btn btn-primary position-relative mt-4">
  Elemento
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    9
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        </>
    )
}

export default NotificationButton