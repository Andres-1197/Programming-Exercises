using System;

public class Program
{
    static void Main(string[] args)
    {
        // invertir una cadena de texto por medio de un algoritmo
        string cadena = "AGKE124";

        string reversedCadena = way2(cadena);
        Console.WriteLine(reversedCadena);
        
    }

    public static string way1(string cadena)
    {
        string newCadena = "";
        for (int i = cadena.Length - 1; i >= 0; i--)
        {
            newCadena += cadena[i];
        }
        return newCadena;
    }

    public static string way2(string cadena){
        char[] chars = cadena.ToCharArray();
        Array.Reverse(chars);
        string result = new String(chars);
        return result;
    }
}
