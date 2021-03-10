import React from "react";

const RenderComments = (props) => {
    // Crear servicio para obtener los comentarios
    if(!props.comments.length)
    return <div>This post not have comments</div>;
    return <div></div>;
};


RenderComments.propsDefault = {
    comments = []
}

export default RenderComments;
