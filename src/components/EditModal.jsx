import React, { useState, useEffect } from "react";
import { Input, Select } from "antd";
import axios from "axios";
function EditModal({ todo, onCancel, onSave }) {
    const { TextArea } = Input;
    const [editedTitle, setEditedTitle] = useState("");
    const [editedDescription, setEditedDescription] = useState("");
    const [editedPriority, setEditedPriority] = useState("");

    useEffect(() => {
      setEditedTitle(todo.title);
      setEditedDescription(todo.description);
      setEditedPriority(todo.priority);
    }, [todo]);

    const handleUpdate = async () => {
      const updatedData = {
        title: editedTitle,
        description: editedDescription,
        priority: editedPriority,
      };

      try {
        await axios.put(`http://localhost:5000/todos/${todo.id}`, updatedData);
        onSave();
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    };
    return (
      <div>
        <div>
          <Input
            size="large"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Write Todo"
          />
          <div className="pt-3">
            <TextArea
              rows={4}
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Write Description there..."
            />
          </div>
          <Select
            value={editedPriority}
            onChange={(value) => setEditedPriority(value)}
            style={{ width: 150 }}
            options={[
              { value: "Critical", label: "Critical" },
              { value: "Normal", label: "Normal" },
              { value: "Urgent", label: "Urgent" },
            ]}
          />
          <br />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    );
}

export default EditModal
