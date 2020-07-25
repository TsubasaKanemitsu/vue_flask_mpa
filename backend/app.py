from flask import Flask, jsonify, render_template, request, jsonify

app = Flask(__name__,
            static_folder='../frontend/dist/static',
            template_folder='../frontend/dist/template')
app.config['JSON_AS_ASCII'] = False


@app.route('/')
def index():

    return render_template('index.html')

@app.route('/test')
def test():
    num1 = request.args.get('num1', type=int)
    print(num1)
    num2 = request.args.get('num2', type=int)
    result = num1 + num2
    return {"test": str(result)}

# 明日はpostから
@app.route('/test2', methods=["GET", "POST"])
def test2():
    num1 = int(request.json['num1'])
    num2 = int(request.json['num2'])
    result = num1 + num2
    return jsonify({"test": result})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
