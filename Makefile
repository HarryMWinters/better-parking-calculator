all:
	
build_prod:
	docker build . -t better_parking_calculator

run_prod:
	docker run -p 8000:80 better_parking_calculator
