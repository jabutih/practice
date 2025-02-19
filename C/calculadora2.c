#include <cs50.h>
#include <stdio.h>

int calculate(float, char, float);

int main(void)
{
    while (true)
    {
        float a = get_float("Insira um valor: ");
        char op = get_char("Insira um operador (+, -, /, *): ");
        float b = get_float("Insira outro valor: ");

        calculate(a, op, b);

        char again = get_char("Deseja fazer outro cálculo [S/N]? ");
        if (again != 'S' && again != 's')
        {
            break;
        }
    }
}

int calculate(float a, char op, float b)
{
    switch (op)
    {
        case '+':
            return printf("O resultado é %.3f\n", a + b);

        case '-':
            return printf("O resultado é %.3f\n", a - b);

        case '/':
            return b == 0 ? printf("Erro, divisão por zero não é permitida.\n")
                          : printf("O resultado é %.3f\n", a / b);

        case '*':
            return printf("O resultado é %.3f\n", a * b);

        default:
            return printf("O operador inserido é inválido.\n");
    }
}