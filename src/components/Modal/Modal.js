import React from "react";

export default (props) => {
 return   <div id="myModal" className="modal show " role="dialog">
  <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"
        onClick={props.closeModal}
        >&times;</button>
        <h4 className="modal-title">More Info.</h4>
      </div>
      <div className="modal-body">
        
        <p>Category - { props.modalData.category}</p>
        <p>Metric Name - { props.modalData.metric_name}</p>
        <p>Metric Start - { props.modalData.metric_start}</p>
        <p>Metric Target - { props.modalData.metric_target}</p>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal"
        onClick={props.closeModal}
        >Close</button>
      </div>
    </div>

  </div>
</div>
}