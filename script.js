@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
* { box-sizing: border-box; }
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.form-wrapper { animation: fadeIn 1s ease-in-out; }
.form-container {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 20px;
  width: 380px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  animation: slideUp 1s ease;
}
h2 { text-align: center; color: #333; margin-bottom: 25px; }
h2 i { color: #6a11cb; margin-right: 10px; }
.form-group { margin-bottom: 20px; position: relative; }
label { display: block; font-weight: 600; color: #333; margin-bottom: 6px; }
input {
  width: 100%; padding: 10px 12px; border: 2px solid #ddd; border-radius: 8px;
  outline: none; font-size: 15px; transition: all 0.3s ease;
}
input:focus {
  border-color: #6a11cb; box-shadow: 0 0 8px rgba(106, 17, 203, 0.2);
}
button {
  width: 100%; padding: 12px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border: none; border-radius: 8px; color: #fff;
  font-size: 16px; cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
button i { margin-right: 5px; }
button:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 15px rgba(37, 117, 252, 0.3);
}
.error { color: #e74c3c; font-size: 0.85em; margin-top: 5px; display: block; }
.success-message {
  text-align: center; color: #27ae60; font-weight: bold; margin-top: 15px;
  animation: fadeIn 0.8s ease;
}
@keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
@keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
